
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCeilingFanLight from "../../src/components/MdiCeilingFanLight.vue";

test("MdiCeilingFanLight snapshot", () => {
  const wrapper = mount(MdiCeilingFanLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
