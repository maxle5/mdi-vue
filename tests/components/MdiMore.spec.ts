
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMore from "../../src/components/MdiMore.vue";

test("MdiMore snapshot", () => {
  const wrapper = mount(MdiMore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
