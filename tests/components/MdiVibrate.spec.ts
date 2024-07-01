
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVibrate from "../../src/components/MdiVibrate.vue";

test("MdiVibrate snapshot", () => {
  const wrapper = mount(MdiVibrate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
