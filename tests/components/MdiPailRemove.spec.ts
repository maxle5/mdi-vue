
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailRemove from "../../src/components/MdiPailRemove.vue";

test("MdiPailRemove snapshot", () => {
  const wrapper = mount(MdiPailRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
