
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftTeams from "../../src/components/MdiMicrosoftTeams.vue";

test("MdiMicrosoftTeams snapshot", () => {
  const wrapper = mount(MdiMicrosoftTeams, {});
  expect(wrapper.html()).toMatchSnapshot();
});
