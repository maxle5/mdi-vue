
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionPause from "../../src/components/MdiTelevisionPause.vue";

test("MdiTelevisionPause snapshot", () => {
  const wrapper = mount(MdiTelevisionPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
