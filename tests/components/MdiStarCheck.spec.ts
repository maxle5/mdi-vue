
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarCheck from "../../src/components/MdiStarCheck.vue";

test("MdiStarCheck snapshot", () => {
  const wrapper = mount(MdiStarCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
