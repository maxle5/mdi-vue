
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoSwitch from "../../src/components/MdiVideoSwitch.vue";

test("MdiVideoSwitch snapshot", () => {
  const wrapper = mount(MdiVideoSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
