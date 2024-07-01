
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCompare from "../../src/components/MdiFileCompare.vue";

test("MdiFileCompare snapshot", () => {
  const wrapper = mount(MdiFileCompare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
