
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarPlus from "../../src/components/MdiStarPlus.vue";

test("MdiStarPlus snapshot", () => {
  const wrapper = mount(MdiStarPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
