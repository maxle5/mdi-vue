
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaIBox from "../../src/components/MdiAlphaIBox.vue";

test("MdiAlphaIBox snapshot", () => {
  const wrapper = mount(MdiAlphaIBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
