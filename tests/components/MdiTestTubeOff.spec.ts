
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTestTubeOff from "../../src/components/MdiTestTubeOff.vue";

test("MdiTestTubeOff snapshot", () => {
  const wrapper = mount(MdiTestTubeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
