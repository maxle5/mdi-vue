
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShuffleDisabled from "../../src/components/MdiShuffleDisabled.vue";

test("MdiShuffleDisabled snapshot", () => {
  const wrapper = mount(MdiShuffleDisabled, {});
  expect(wrapper.html()).toMatchSnapshot();
});
