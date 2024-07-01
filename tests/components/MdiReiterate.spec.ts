
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReiterate from "../../src/components/MdiReiterate.vue";

test("MdiReiterate snapshot", () => {
  const wrapper = mount(MdiReiterate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
