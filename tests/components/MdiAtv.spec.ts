
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAtv from "../../src/components/MdiAtv.vue";

test("MdiAtv snapshot", () => {
  const wrapper = mount(MdiAtv, {});
  expect(wrapper.html()).toMatchSnapshot();
});
