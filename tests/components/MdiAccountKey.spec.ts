
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountKey from "../../src/components/MdiAccountKey.vue";

test("MdiAccountKey snapshot", () => {
  const wrapper = mount(MdiAccountKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
