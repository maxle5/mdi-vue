
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGreenhouse from "../../src/components/MdiGreenhouse.vue";

test("MdiGreenhouse snapshot", () => {
  const wrapper = mount(MdiGreenhouse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
