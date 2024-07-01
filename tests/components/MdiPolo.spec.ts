
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPolo from "../../src/components/MdiPolo.vue";

test("MdiPolo snapshot", () => {
  const wrapper = mount(MdiPolo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
