
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLamps from "../../src/components/MdiLamps.vue";

test("MdiLamps snapshot", () => {
  const wrapper = mount(MdiLamps, {});
  expect(wrapper.html()).toMatchSnapshot();
});
