
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriforce from "../../src/components/MdiTriforce.vue";

test("MdiTriforce snapshot", () => {
  const wrapper = mount(MdiTriforce, {});
  expect(wrapper.html()).toMatchSnapshot();
});
