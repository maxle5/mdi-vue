
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSd from "../../src/components/MdiSd.vue";

test("MdiSd snapshot", () => {
  const wrapper = mount(MdiSd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
