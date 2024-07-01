
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKabaddi from "../../src/components/MdiKabaddi.vue";

test("MdiKabaddi snapshot", () => {
  const wrapper = mount(MdiKabaddi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
