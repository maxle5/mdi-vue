
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleBoardPoll from "../../src/components/MdiHumanMaleBoardPoll.vue";

test("MdiHumanMaleBoardPoll snapshot", () => {
  const wrapper = mount(MdiHumanMaleBoardPoll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
