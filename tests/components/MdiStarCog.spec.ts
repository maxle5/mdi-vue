
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarCog from "../../src/components/MdiStarCog.vue";

test("MdiStarCog snapshot", () => {
  const wrapper = mount(MdiStarCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
