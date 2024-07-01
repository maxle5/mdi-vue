
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSack from "../../src/components/MdiSack.vue";

test("MdiSack snapshot", () => {
  const wrapper = mount(MdiSack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
