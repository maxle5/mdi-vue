
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoodles from "../../src/components/MdiNoodles.vue";

test("MdiNoodles snapshot", () => {
  const wrapper = mount(MdiNoodles, {});
  expect(wrapper.html()).toMatchSnapshot();
});
