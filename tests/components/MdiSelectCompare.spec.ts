
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectCompare from "../../src/components/MdiSelectCompare.vue";

test("MdiSelectCompare snapshot", () => {
  const wrapper = mount(MdiSelectCompare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
