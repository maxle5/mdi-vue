
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTestTube from "../../src/components/MdiTestTube.vue";

test("MdiTestTube snapshot", () => {
  const wrapper = mount(MdiTestTube, {});
  expect(wrapper.html()).toMatchSnapshot();
});
