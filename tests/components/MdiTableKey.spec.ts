
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableKey from "../../src/components/MdiTableKey.vue";

test("MdiTableKey snapshot", () => {
  const wrapper = mount(MdiTableKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
