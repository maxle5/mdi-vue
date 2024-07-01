
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPurse from "../../src/components/MdiPurse.vue";

test("MdiPurse snapshot", () => {
  const wrapper = mount(MdiPurse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
