
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandle from "../../src/components/MdiCandle.vue";

test("MdiCandle snapshot", () => {
  const wrapper = mount(MdiCandle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
