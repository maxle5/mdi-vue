
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTestTubeEmpty from "../../src/components/MdiTestTubeEmpty.vue";

test("MdiTestTubeEmpty snapshot", () => {
  const wrapper = mount(MdiTestTubeEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
