
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelapse from "../../src/components/MdiTimelapse.vue";

test("MdiTimelapse snapshot", () => {
  const wrapper = mount(MdiTimelapse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
