
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirbag from "../../src/components/MdiAirbag.vue";

test("MdiAirbag snapshot", () => {
  const wrapper = mount(MdiAirbag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
