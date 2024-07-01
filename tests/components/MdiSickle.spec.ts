
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSickle from "../../src/components/MdiSickle.vue";

test("MdiSickle snapshot", () => {
  const wrapper = mount(MdiSickle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
