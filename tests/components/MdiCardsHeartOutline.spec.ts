
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsHeartOutline from "../../src/components/MdiCardsHeartOutline.vue";

test("MdiCardsHeartOutline snapshot", () => {
  const wrapper = mount(MdiCardsHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
