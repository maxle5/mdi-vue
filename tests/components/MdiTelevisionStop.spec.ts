
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionStop from "../../src/components/MdiTelevisionStop.vue";

test("MdiTelevisionStop snapshot", () => {
  const wrapper = mount(MdiTelevisionStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
