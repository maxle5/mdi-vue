
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPail from "../../src/components/MdiPail.vue";

test("MdiPail snapshot", () => {
  const wrapper = mount(MdiPail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
