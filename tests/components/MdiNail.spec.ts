
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNail from "../../src/components/MdiNail.vue";

test("MdiNail snapshot", () => {
  const wrapper = mount(MdiNail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
