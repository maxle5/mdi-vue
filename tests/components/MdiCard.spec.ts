
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCard from "../../src/components/MdiCard.vue";

test("MdiCard snapshot", () => {
  const wrapper = mount(MdiCard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
