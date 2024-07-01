
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTournament from "../../src/components/MdiTournament.vue";

test("MdiTournament snapshot", () => {
  const wrapper = mount(MdiTournament, {});
  expect(wrapper.html()).toMatchSnapshot();
});
