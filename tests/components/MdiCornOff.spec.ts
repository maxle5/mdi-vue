
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCornOff from "../../src/components/MdiCornOff.vue";

test("MdiCornOff snapshot", () => {
  const wrapper = mount(MdiCornOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
