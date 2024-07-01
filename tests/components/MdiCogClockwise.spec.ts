
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogClockwise from "../../src/components/MdiCogClockwise.vue";

test("MdiCogClockwise snapshot", () => {
  const wrapper = mount(MdiCogClockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
