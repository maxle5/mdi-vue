
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextLong from "../../src/components/MdiTextLong.vue";

test("MdiTextLong snapshot", () => {
  const wrapper = mount(MdiTextLong, {});
  expect(wrapper.html()).toMatchSnapshot();
});
