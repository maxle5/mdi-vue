
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLongitude from "../../src/components/MdiLongitude.vue";

test("MdiLongitude snapshot", () => {
  const wrapper = mount(MdiLongitude, {});
  expect(wrapper.html()).toMatchSnapshot();
});
