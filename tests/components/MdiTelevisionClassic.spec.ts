
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionClassic from "../../src/components/MdiTelevisionClassic.vue";

test("MdiTelevisionClassic snapshot", () => {
  const wrapper = mount(MdiTelevisionClassic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
