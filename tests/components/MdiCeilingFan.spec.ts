
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCeilingFan from "../../src/components/MdiCeilingFan.vue";

test("MdiCeilingFan snapshot", () => {
  const wrapper = mount(MdiCeilingFan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
