
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterOff from "../../src/components/MdiFilterOff.vue";

test("MdiFilterOff snapshot", () => {
  const wrapper = mount(MdiFilterOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
