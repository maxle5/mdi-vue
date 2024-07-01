
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogPauseOutline from "../../src/components/MdiCogPauseOutline.vue";

test("MdiCogPauseOutline snapshot", () => {
  const wrapper = mount(MdiCogPauseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
