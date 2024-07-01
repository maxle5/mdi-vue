
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPound from "../../src/components/MdiPound.vue";

test("MdiPound snapshot", () => {
  const wrapper = mount(MdiPound, {});
  expect(wrapper.html()).toMatchSnapshot();
});
