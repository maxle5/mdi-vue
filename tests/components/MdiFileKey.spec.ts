
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileKey from "../../src/components/MdiFileKey.vue";

test("MdiFileKey snapshot", () => {
  const wrapper = mount(MdiFileKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
