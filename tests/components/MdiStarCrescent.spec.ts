
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarCrescent from "../../src/components/MdiStarCrescent.vue";

test("MdiStarCrescent snapshot", () => {
  const wrapper = mount(MdiStarCrescent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
