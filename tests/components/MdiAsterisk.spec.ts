
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAsterisk from "../../src/components/MdiAsterisk.vue";

test("MdiAsterisk snapshot", () => {
  const wrapper = mount(MdiAsterisk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
